FROM node:12.16.1

ENTRYPOINT ["/bin/bash", "-c"]

CMD ["yarn && yarn test"]
