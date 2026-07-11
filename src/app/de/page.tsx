import Gateway from "@/components/gateway/Gateway";
import { gatewayMetadata } from "@/lib/gateway-metadata";

export const metadata = gatewayMetadata("de");

export default function GermanGateway() {
  return <Gateway locale="de" />;
}
