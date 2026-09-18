import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

fastify.get('/', async () => {

  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'qwen3:4b-instruct',
      messages: [
        {
          role: 'user',
          content: 'Hello, can you provide a brief overview of the Qwen3:4b-instruct model and its capabilities?'
        }
      ],
      stream: false
    })
  });

  const data = await response.json();

  return data.message.content;
});

const start = async () => {
  try {
    await fastify.listen({
      port: 3000,
      host: '0.0.0.0'
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();