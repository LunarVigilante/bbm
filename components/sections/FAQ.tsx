import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const items = FAQ_ITEMS.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section id="faq" className="py-20 scroll-mt-32">
      <Container className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold text-text-primary">
            Answers for modern operators
          </h2>
          <p className="mt-3 text-base text-text-secondary">
            Still curious? Email us at support@blackbeard.media and we’ll respond in less than a day.
          </p>
        </div>
        <Accordion items={items} allowMultiple />
      </Container>
    </section>
  );
}
