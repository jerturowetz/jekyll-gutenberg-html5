# For Netlify deploy

# Variables
default_config := _config.yml
generated_config := _config.deploy.yml
url_from_yaml := $(strip $(subst url:,,$(shell grep --max-count=1 '^url:' _config.yml)))
robots_file := src/robots.txt
redirects_file := src/_redirects

# Environment variable fallbacks
BRANCH ?= master
CONTEXT ?= production
DEPLOY_PRIME_URL ?= ${url_from_yaml}

# Get the url for the site either from _config.yml or netlify env var
ifeq ($(CONTEXT),production)
site_url := ${url_from_yaml}
deploy_url := $(subst master--,,${DEPLOY_PRIME_URL})
else
site_url := $(subst www,${BRANCH},${url_from_yaml})
deploy_url := ${DEPLOY_PRIME_URL}
endif

# Robots.txt content
ifeq ($(CONTEXT),production)
define ROBOTS
# www.robotstxt.org/
#
# Allow crawling of all content
User-agent: *
Disallow:
endef
else
define ROBOTS
# www.robotstxt.org/
#
# Disallow and Noindex all content
User-agent: *
Disallow: /
Noindex: /
endef
endif

# Export robots var as an enviroment var so we can use it later
export ROBOTS

# Redirects content
define REDIRECTS
# Redirect default Netlify subdomain to primary domain
$(subst ",,${deploy_url})/* $(subst ",,${site_url})/:splat 301!
/  /fr/  302  Language=fr
endef

# Export redirects as an enviroment var so we can use it later
export REDIRECTS

all: build

.PHONY: clean build

build:
	@rm -rf dist
	@sed 's~${url_from_yaml}~${site_url}~g' ${default_config} >${generated_config}
	@ echo "$$ROBOTS" > ${robots_file}
	@ echo "$$REDIRECTS" > ${redirects_file}
	@jekyll build --config ${generated_config}
	@rm ${generated_config}
