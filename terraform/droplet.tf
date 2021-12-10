# need provider
# backend will take care of states
# tfstate is being stored in s3
# terraform cloud will take care of state and runs, app.terraform.io
  # make workspace
  # cli driven runs, copy code once you made a workspace in terraform cloud
  # ssh fingerprint is in workspace variable
  # wala nang tfvars if terraform cloud gamit, meron if s3
  
# Create a new Web Droplet in the sg1 region
resource "digitalocean_droplet" "dev-1" {
  image  = "ubuntu-18-04-x64"
  name   = "dev-1"
  region = "sg1"
  size   = "s-1vcpu-1gb"
}

/*
ssh_keys = [
    var.ssh_fingerprint #fingerprint ng ssh key from digitalocean
  ]

  connection {
    host        = self.ipv4_address
    user        = "root"
    type        = "ssh"
    private_key = var.pvt_key #generated from sshkeygen, can create from git bash
    timeout     = "2m"
  }
}
*/
