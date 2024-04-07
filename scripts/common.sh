#!/bin/bash
export TEZOS_CLIENT_UNSAFE_DISABLE_DISCLAIMER=y
declare -A COLORS=(
     [RED]='\033[0;31m'
     [GREEN]='\033[0;32m'
     [BLUE]='\033[1;34m'
     [YELLOW]='\033[1;33m'
     [PURPLE]='\033[0;35m'
     [NC]='\033[0m' # No Color
 )
# List of octez addresses
staker_addresses=(
"tz1TEVmgziJe9GbrhKfvKJEaGZhVYcXHMB85"
"tz1hCpmUdSgNfgwr4mLd2oRKCgb9ipX8iU8m"
"tz1ajuVPBSYS3ndmC1vkAXJnUFv8wtcQsq5R"
)

# Target octez address
baker_address="tz1LXM6GxECQuQ4L5egeYHRgdye3wPqWesiE"
