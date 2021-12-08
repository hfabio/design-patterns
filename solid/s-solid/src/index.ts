//s = Single Responsibility Principle

import Client from "./Client";
import Notify from "./Notify";

const client = new Client('heltonfabio@outlook.com');
const notify = new Notify();

notify.sendEmail(client.email);