require('dotenv').config();
const axios = require('axios');

class Graphql {
	static async query(query, variables, params) {
		return await axios.post(
			`${process.env.SELF_URL}/apis/graphql`,
			{ query, variables },
			{ params }
		);
	}

	static async fetchUser(id) {
		const query = `
			query fetchUser($id: BigInt!) {
				userById(id: $id) {
					nodeId
					id
					name
					email
					createdAt
				}
			}
		`;

		return await this.query(query, { id });
	}

	static async listUsers() {
		const query = `
			query listUsers {
				allUsers {
					nodes {
						nodeId
						id
						name
						email
						createdAt
					}
				}
			}
		`;

		return await this.query(query, {});
	}

	static async createUser(payload) {
		const query = `
			mutation createUser($payload: UserInput!) {
				createUser(input: { user: $payload }) {
					clientMutationId
					user {
						nodeId
						id
						name
						email
						createdAt
					}
				}
			}
		`;

		return await this.query(query, { payload });
	}

	static async updateUser(id, payload) {
		const query = `
			mutation updateUser($id: BigInt! $payload: UserPatch!) {
				updateUserById(input: { userPatch: $payload id: $id }) {
					user {
						nodeId
						id
						name
						email
						createdAt
					}
				}
			}
		`;

		return await this.query(query, { payload, id });
	}
}

module.exports = Graphql;
