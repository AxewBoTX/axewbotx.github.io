{
  description = "raesan-web";
  inputs = {
    nixpkgs.url =
      "github:nixos/nixpkgs/f898cbfddfab52593da301a397a17d0af801bbc";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        formatter =
          pkgs.nixfmt-classic;
        devShell = pkgs.mkShell {
          packages = [
		  	pkgs.bun
          ];
        };
      });
}
