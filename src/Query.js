// const githubQuery = {
//     query: `
//     {
//     viewer {
//         login
//         name
//             repositories(first:10) {
//             nodes {
//             name
//             description
//             id
//             url
//           }
//         }
//       }
//     }      
//   `,
//   };

const githubQuery = (pageCount, queryString, paginationKeyword, paginationString) => {
    return {
        query: `
        {
            viewer {
              login
            }
            search(query: "${queryString} user:mdbatruch sort:updated-desc", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
              repositoryCount
              edges {
                  cursor
                  node {
                    ... on Repository {
                      name
                      description
                      id
                      url
                      viewerSubscription
                      licenseInfo {
                        spdxId
                      }
                    }
                  }
              }
              pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
              }
            }
          }    
      `,
      };
}

  export default githubQuery;