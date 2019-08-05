import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export default graphql(
	gql`
		mutation createUser($payload: UserInput!) {
			createUser(input: { user: $payload }) {
				clientMutationId
				user {
					id
				}
			}
		}
	`,
	{ name: 'createUser', variables: { payload: {} } }
);
