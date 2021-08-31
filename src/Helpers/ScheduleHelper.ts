import { RecurrenceRule } from "node-schedule";
import { TimerRules } from "../Interfaces";

export default class ScheduleHelper {
  static createTimerRule(rules: TimerRules): RecurrenceRule {
    if (process.env.ENVIRONMENT === "development") {
      const now = new Date();

      const rule = new RecurrenceRule();
      rule.hour = now.getHours();
      rule.minute = now.getMinutes();
      rule.second = now.getSeconds() + 5;

      return rule;
    }

    const rule = new RecurrenceRule();

    if (rules.hour) {
      rule.hour = rules.hour;
    }

    if (rules.minute) {
      rule.minute = rules.minute;
    }

    if (rules.second) {
      rule.second = rules.second;
    }

    return rule;
  }
}