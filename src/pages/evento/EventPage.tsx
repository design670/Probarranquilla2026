import { SiteShell } from '../../components/SiteShell';
import { SuccessStories } from '../../components/SuccessStories';
import { EventHero } from './EventHero';
import { AirConnectivity } from './AirConnectivity';
import { SupportStages } from './SupportStages';
import { EventResults } from './EventResults';
import { CityLibrary } from './CityLibrary';
import { MemberHotels } from './MemberHotels';
import { EventContact } from './EventContact';
import { eventCases } from '../../data/evento';

/** "Haz tu evento en Barranquilla — Turismo de reuniones" */
export function EventPage() {
  return (
    <SiteShell hero={<EventHero />}>
      <SupportStages />
      <EventResults />
      <SuccessStories className="cases--compact" data={eventCases} />
      <AirConnectivity />
      <MemberHotels />
      <CityLibrary />
      <EventContact />
    </SiteShell>
  );
}
