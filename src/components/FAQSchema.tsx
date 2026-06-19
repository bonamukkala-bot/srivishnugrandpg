import { Helmet } from "react-helmet-async";
import { faqs } from "@/data/faqData";

export function FAQSchema() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://srivishnugrandpg.vercel.app/#faq",
        "about": {
            "@id": "https://srivishnugrandpg.vercel.app/#business",
        },
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".faq-answer", ".faq-question"]
        },
        "mainEntity": faqs.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a,
            },
        })),
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
        </Helmet>
    );
}

export default FAQSchema;