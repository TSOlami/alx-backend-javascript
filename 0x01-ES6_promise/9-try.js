export default function guardrail(mathFunction) {
  // When the mathFunction function is executed,
  // the value returned by the function should be appended to the queue.
  const queue = [];
  try {
	  const result = mathFunction();
	  queue.push(result);
  } catch (error) {
	  queue.push(`Error: ${error.message}`);
  } finally {
	  queue.push('Guardrail was processed');
  }
  return queue;
}
