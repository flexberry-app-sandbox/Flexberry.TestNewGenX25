FROM node:10 as ember_app

COPY /src/ember-app /src/ember-app

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  cd /src/ember-app/; \
  ember build --environment=docker

FROM mono:latest as backend

COPY /src/TestNewGenX2 /src/TestNewGenX2

RUN \
 cd /src/TestNewGenX2 ;\
 nuget restore TestNewGenX2.sln; \
 msbuild /p:Configuration=Release TestNewGenX2.sln

FROM flexberry/mono-xsp:latest

MAINTAINER mail@flexberry.net

COPY --from=backend /src/TestNewGenX2/ODataBackend /app
COPY --from=ember_app /src/ember-app/dist /app
WORKDIR /app
