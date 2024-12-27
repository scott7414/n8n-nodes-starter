import * as dotenv from 'dotenv';
dotenv.config(); // Load variables from the .env file

import {
	CredentialType,
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class MyAppApi implements ICredentialType {
	name = 'HighLevel'; // Unique name for your credentials
	displayName = 'High Level Oauth 2.0'; // Display name visible in n8n
	documentationUrl = ''; // Optional: URL to documentation for this credential

	properties = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string' as NodePropertyTypes,
			default: process.env.HIGHLEVEL_CLIENT_ID || '',
			required: true,
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string' as NodePropertyTypes,
			default: process.env.HIGHLEVEL_CLIENT_SECRET || '',
			required: true,
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'string' as NodePropertyTypes,
			default: 'https://marketplace.gohighlevel.com/oauth/chooselocation',
		},
		{
			displayName: 'Access Token URL',
			name: 'tokenUrl',
			type: 'string' as NodePropertyTypes,
			default: 'https://services.leadconnectorhq.com/oauth/token',
		},
		{
			displayName: 'Redirect URL',
			name: 'redirectUrl',
			type: 'string' as NodePropertyTypes,
			default: 'https://n8n.io/rest/oauth2-credential/callback',
			description: 'URL to redirect after successful authentication',
		},
	];
}

