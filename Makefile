

#
# Build.
#

build: node_modules

#
# Clean.
#

clean:
	@-rm -rf node_modules

#
# Test.
#

test: build

#
# Phonies.
#

.PHONY: build
.PHONY: clean
.PHONY: test

#
# Target for `node_modules` folder.
#

node_modules: package.json
	@npm install