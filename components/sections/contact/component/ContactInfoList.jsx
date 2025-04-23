import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactInfoItem from "./ContactInfoItem";

export default function ContactInfoList({ email, address }) {
  return (
    <div className="space-y-6 mb-8">
      <ContactInfoItem
        icon={<FaEnvelope size={20} />}
        label="Email"
        value={email}
        href={`mailto:${email}`}
      />
      <ContactInfoItem
        icon={<FaMapMarkerAlt size={20} />}
        label="Location"
        value={address}
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          address
        )}`}
      />
    </div>
  );
}
