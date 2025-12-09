// 指令列表
export const commands = [
  {
    name: "ping",
    description: "Replies with Pong!"
  },
  {
    name: "echo",
    description: "Replies what you type",
    options: [
      {
        name: "text",
        description: "Text to echo",
        type: 3, // STRING
        required: true
      }
    ]
  }
];