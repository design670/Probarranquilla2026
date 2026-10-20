import { SiteShell } from '../../components/SiteShell';
import { SuccessStories } from '../../components/SuccessStories';
import { EventHero } from './EventHero';
import { AirConnectivity } from './AirConnectivity';
import { SupportStages } from './SupportStages';
import { EventResults } from './EventResults';
import { CityLibrary } from './CityLibrary';
import { VideoBlock } from './VideoBlock';
import { MemberHotels } from './MemberHotels';
import { EventContact } from './EventContact';

/** "Haz tu evento en Barranquilla — Turismo de reuniones" */
export function EventPage() {
  return (
    <SiteShell hero={<EventHero />}>
      <AirConnectivity />
      <SupportStages />
      <EventResults />
      <SuccessStories className="cases--compact" />
      <CityLibrary />
      <VideoBlock />
      <MemberHotels />
      <EventContact />
    </SiteShell>
  );
}
