// @flow strict
import { certificateData } from "@/utils/data/certificateData"; // استيراد بيانات الشهادات

async function getCertificate(slug) { // تغيير اسم الدالة
  const cert = certificateData.find(c => c.slug === slug); // إيجاد الشهادة المناسبة
  if (!cert) {
    throw new Error('Certificate not found');
  }
  return cert;
};

async function CertificateDetails({ params }) {
  const slug = params.slug;
  const cert = await getCertificate(slug); // استخدام الدالة المعدلة

  return (
    <div>
      <h1>{cert.name}</h1>
      <Image src={cert.cover_image} alt={cert.name} width={500} height={500} />
      <p>{cert.description}</p>
      <p>{cert.date}</p>
      <a href={cert.link}>View Certificate</a> {/* رابط الشهادة */}
    </div>
  );
};

export default CertificateDetails;
