import { Timeline } from "@mui/lab";
import IntactIntegration from "./IntactInegration";
import IntactMaintenance from "./IntactMaintenance";

export default function ParcoursScolaire() {
    return (
        <Timeline position="alternate">
            <IntactMaintenance />
            <IntactIntegration />

        </Timeline >
    )
}