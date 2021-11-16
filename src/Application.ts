
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication, RestServer, RestBindings } from '@loopback/rest';

export class Application extends RepositoryMixin(RestApplication) {
	constructor() {
		super();

	}

	public async start(): Promise<void> {
		// application specific code here

		await super.start();

		// more application-specific code here

		const server = await this.getServer(RestServer);
		const port = await server.get(RestBindings.PORT);

		console.log(`Server is running at http://127.0.0.1:${port}`);
		console.log(`OpenApi spec: http://127.0.0.1:${port}/openapi.json`);
		console.log(`API explorer: http://127.0.0.1:${port}/explorer`);
	}
}
