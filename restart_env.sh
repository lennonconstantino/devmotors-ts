#!/bin/bash

# Limpar cache do yarn
yarn cache clean

# Remover node_modules e lock file
rm -rf node_modules
rm yarn.lock

# Reinstalar dependências
yarn install
