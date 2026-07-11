import Gateway from "@/components/gateway/Gateway";
import { gatewayMetadata } from "@/lib/gateway-metadata";

export const metadata = gatewayMetadata("en");

export default function EnglishGateway() {
  return <Gateway locale="en" />;
}
