import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from '@ui';

export default function App() {
  return (
    <div className="w-[400px] min-h-[300px] p-4">
      <h1 className="text-2xl font-bold mb-4">IT Diots Extension</h1>

      <Button>Click me</Button>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
