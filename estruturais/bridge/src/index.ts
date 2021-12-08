import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import Facebook from "./platforms/Facebook";
import Youtube from "./platforms/Youtube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

console.clear();

const startLive = async (platform: IPlatform): Promise<void> => {
  console.log('Aguarde...');
  await new Promise((resolve) => setTimeout(resolve, 400));
  const live = new Live(platform);
  await new Promise((resolve) => setTimeout(resolve, 200));

  live.broadcasting();
  live.playback();
}

const startAdvancedLive = async (platform: IPlatform): Promise<void> => {
  console.log('Aguarde...');
  await new Promise((resolve) => setTimeout(resolve, 400));
  const live = new AdvancedLive(platform);
  await new Promise((resolve) => setTimeout(resolve, 200));

  live.broadcasting();
  live.playback();
}

// startLive(new Youtube());
// startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());