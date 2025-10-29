import Service_LesionReportSheet from "./Service-LesionReportSheet";
import { ServicesManager } from "@ohif/core/src/services";

function _create({ configuration = {}, servicesManager }) {
  return new Service_LesionReportSheet(servicesManager);
}

export default function WrappedService_LesionReportSheet(servicesManager) {
  return {
    name: 'serviceLesionReportSheet',
    create: _create,
  };
}
