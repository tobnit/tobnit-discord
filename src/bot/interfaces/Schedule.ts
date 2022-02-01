import { RecurrenceRule } from "node-schedule";
import Client from "#bot/client";

interface CallbackProps {
  (client: Client): Promise<void>;
}

export interface Schedule {
  name: string;
  timerRules: RecurrenceRule;
  callback: CallbackProps;
}
