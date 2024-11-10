package main

import (
	"github.com/gorilla/mux"
	"github.com/spf13/pflag"
	"github.com/spf13/viper"
	"net/http"
	"time"
	"os"
	"os/signal"
	"context"
	"sync"
	"log"
)

var CONFIG_FILE string
var config ConfigStructure

// Serve a directory to a port.
func servePage(router *mux.Router, dest string, path string, port string) {
	router.PathPrefix(path).Handler(http.FileServer(http.Dir(dest)))

	srv := &http.Server{
		Addr: "0.0.0.0: " + port,
		// Good practice to set timeouts to avoid Slowloris attacks.
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
		IdleTimeout:  time.Second * 60,
		Handler:      router, // Pass our instance of gorilla/mux in.
	}

	// Run our server in a goroutine so that it doesn't block.
	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Println(err)
		}
	}()

	log.Println("Web server is running on port " + string(port))
}

func parseConfig() {
  viper.SetConfigType("json")
  viper.SetConfigFile(CONFIG_FILE)
  viper.ReadInConfig()

  // TODO: Handle error
  viper.Unmarshal(&config)
}

func parseCLI() {
  // Define CLI option, shorthand, default value, and description
  // TODO: Dynamically obtain default config location from environment variables.
  pflag.StringP("config", "c", "/home/violet/.config/joshashton.dev/portfolio/live.json", "Configuration file used in initializing my portfolio.")

  pflag.Parse()
  viper.BindPFlags(pflag.CommandLine)

  // Retrieve CLI argument, either the default value or the user provided value.
  CONFIG_FILE = viper.GetString("config")
}

func serve() {
	var wg sync.WaitGroup
	r := mux.NewRouter()
	servePage(r, config.WebpageDir, "/", config.WebpagePort)
	addr := "0.0.0.0:" + config.RouterPort

	srv := &http.Server{
		Addr: addr,
		// Good practice to set timeouts to avoid Slowloris attacks.
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
		IdleTimeout:  time.Second * 60,
		Handler:      r, // Pass our instance of gorilla/mux in.
	}

	// Run our server in a goroutine so that it doesn't block.
	wg.Add(1)
	go func() {
		defer wg.Done()
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Println(err)
		}
	}()

	log.Println("Router is running on port ", config.RouterPort)

	c := make(chan os.Signal, 1)
	// We'll accept graceful shutdowns when quit via SIGINT (Ctrl+Shift+C)
	signal.Notify(c, os.Interrupt)

	// Block until we receive our signal.
	<-c

	// Create a deadline to wait for.
	ctx, cancel := context.WithTimeout(context.Background(), time.Duration(30))
	defer cancel()
	// Doesn't block if no connections, but will otherwise wait
	// until the timeout deadline.
	srv.Shutdown(ctx)
	// Optionally, you could run srv.Shutdown in a goroutine and block on
	// <-ctx.Done() if your application should wait for other services
	// to finalize based on context cancellation.
	log.Println("shutting down")
	wg.Wait()
	os.Exit(0)
}

func main() {
	parseCLI()
	parseConfig()
	serve()
}
