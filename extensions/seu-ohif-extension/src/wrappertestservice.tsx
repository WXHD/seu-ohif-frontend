import TestService from "./testservice";
import { ServicesManager } from "../../../platform/core/src/services";
function _create({ configuration = {}, servicesManager }) {
	console.log('testService was created');
	return new TestService(servicesManager);
}
export default function WrappedTestService(servicesManager) {
	return {
		// Note the canonical name of lower camel case backEndService
		name: 'testService',
		create: _create,
		// create: ({ configuration = {}, servicesManager }) => {
		//   console.log('testService was created');
		//   return new TestService(servicesManager);
		// },
	};
}
