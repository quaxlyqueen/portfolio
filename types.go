package main

type ConfigStructure struct {
  Domain          string                `mapstructure:"domain"`
  RouterPort      string 								`mapstructure:"router_port"`
  WebpageDir      string                `mapstructure:"webpage_dir"`
  WebpagePort     string 									`mapstructure:"webpage_port"`
}
