bash-node:
	docker run --rm -it -v ${PWD}:/home/node/app -w /home/node/app -u node node:16 bash