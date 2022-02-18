import Client from "#bot/client";
import { goodMorningMessages } from "#bot/data";
import { ScheduleHelper } from "#bot/helpers";
import { Schedule } from "#bot/interfaces";

export const schedule: Schedule = {
  name: "sendGoodMorningMessage",
  timerRules: ScheduleHelper.createTimerRule({ hour: 7, minute: 30 }),
  callback: async (client: Client) => {
    const messages = goodMorningMessages;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const sendMessage = () => {
      try {
        client.channels.cache.get("914873869242875947").send(randomMessage);
      } catch(error) {}
    };

    client.once("messageCreate", sendMessage);

    const fourHoursInMilliseconds = 14400000;
    setTimeout(() => {
      client.off("messageCreate", sendMessage);
    }, fourHoursInMilliseconds);
  },
};
