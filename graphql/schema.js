const { buildSchema } = require('graphql');

// in schema '!' indicates require field otherwise it gives error
module.exports = buildSchema(`
    type subData {
        text: String
        subText: String!
    }

    type TestData {
        text: String!
        views: subData!
    }

    type RootQuery {
        hello: TestData
    }

    schema {
        query: RootQuery
    }
`);