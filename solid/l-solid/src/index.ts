// l - Liskov Substitution Principle

import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

const creditCard = new CreditCard(1000);
const debitCard = new DebitCard(2000);
const rewards = new NubankRewards(10000);

creditCard.collectPayment(500);
debitCard.collectPayment(1000);
rewards.collectPayment(2000);