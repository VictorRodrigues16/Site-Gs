import { useState, useEffect } from "react";
import mqtt from "mqtt";

const useMQTT = (brokerUrl, topic) => {
  const [client, setClient] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const client = mqtt.connect(brokerUrl);
    setClient(client);

    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      client.subscribe(topic, (err) => {
        if (!err) {
          console.log(`Subscribed to topic ${topic}`);
          console.log(messages);
        }
      });
    });

    client.on("message", (topic, message) => {
      console.log(`Received message: ${message}`);
      setMessages((prevMessages) => [...prevMessages, message.toString()]);
    });

    return () => {
      if (client) {
        client.end();
      }
    };
  }, [brokerUrl, topic]);

  if (messages[0] != undefined){
    const formatedMessage = JSON.parse(messages[0])
    return formatedMessage
  } else {
    return messages;
  }
};

export default useMQTT;
