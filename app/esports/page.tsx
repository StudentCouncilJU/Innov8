"use client";
import Card from "@/components/domainscomponents/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OptimizedMarquee from "@/components/OptimizedMarquee";
import React from "react";

const page = () => {
  const marqueeItems = ["BGMI", "Valorant", "Tekken", "Fifa", "Free Fire"];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="w-full pt-20 sm:pt-28 md:pt-8 flex flex-col items-center min-h-screen bg-black pb-8">
        <h1 className="text-white uppercase font-anton text-[4rem] sm:text-[6rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem] text-center px-4">
          Esports
        </h1>
        <OptimizedMarquee items={marqueeItems} />
        <div className="w-full px-4 sm:px-6 md:px-8 py-4 flex mt-8 sm:mt-14 md:mt-20 flex-wrap gap-4 sm:gap-6 md:gap-7 justify-center">
          <Card
            name="BGMI"
            description={`### Team

A team may consist of a maximum of **4+1 participants**.  
Students from different educational institutes can form a team.

---

### Rules and Regulations

- No emulators allowed, only **mobile phones and iPads**.  
- Squads are responsible for their own technical issues (hardware/internet).  
- In case a player gets disconnected from a match, the Squad is allowed to continue playing the match at a disadvantage.  
- Using hacks and any other 3rd party software/tool will result in immediate disqualification.

---

### Placement Points

- 1st Position – 10 points  
- 2nd Position – 6 points  
- 3rd Position – 5 points  
- 4th Position – 4 points  
- 5th Position – 3 points  
- 6th Position – 2 points  
- 7th Position – 1 point  
- 8th Position – 1 point  
- 9th Position – 16th Position – 0 points  
- 1 Kill – 1 Point

---

### Fixtures

- The event will consist of rounds depending on the number of entries (up to 20 per round).

1. **Qualifiers**:  
   - Any number of teams  
   - 2 Matches (1 Erangel, 1 Sanhok)

2. **Semi-Final**:  
   - 32 Teams  
   - 3 Matches (1 Erangel, 1 Miramar, 1 Sanhok)

3. **Final**:  
   - 16 Teams  
   - 4 Matches (2 Erangel, 1 Miramar, 1 Sanhok)

---

### Powerplay (Special for Finalists)

- For every kill in the **first zone**, the team will be awarded **2x points per finish**.

---

### Judging Criteria

The winner of the tournament will be decided by adding up all the points scored in the final round.  
The Solo or Squad with the highest point count will proceed to the next round or ultimately win.

> *Violation of any of the above rules will lead to disqualification.*
`}
            link="#"
            image="/posters/2.jpg"
          />
          <Card
            name="Valorant"
            description={`### About

The Valorant LAN Event 2024 will be held in-person, bringing together top teams to compete in a structured, competitive environment.

---

### Team

The Players are free to create their teams with a **minimum of 5 players and 1 substitute**.  
Each registered team will constitute a Team.  
It is necessary for all players to carry their own PC (laptop).  
(Match fixtures/brackets and schedule will be shared with the registered Team Leaders.)

---

### Tournament Format

- **Online Qualifiers**:  
  Single Elimination – BO1 (Best of One) Match – Mode: STANDARD  
  (Online Qualifiers will take place 1 week before the event start date.)

- **Quarter Finals**:  
  Single Elimination – BO1 Match – Mode: STANDARD

- **Semi Finals**:  
  BO1 Match – Mode: STANDARD

- **Finals**:  
  BO3 (Best of Three) Match – Mode: STANDARD  
  *(Quarter Finals, Semi Finals, and Finals will be held offline at JECRC University Campus).*

---

### Match Procedure

#### Valorant Map Pool

- Ascent  
- Bind  
- Corrode  
- Haven  
- Lotus  
- Abyss  
- Sunset  

#### Server Setup

- Game server: **Mumbai**

#### Best of 1 Map Selection

- Team who wins coin toss is **Team A**, the other is **Team B**.
- Team A Bans a map.  
- Team B Bans a map.  
- Team A Bans a map.  
- Team B Bans a map.  
- Team A Bans a map.  
- Team B Bans a map.  
- The last remaining map is picked.  
- Team A picks the side.

#### Best of 3 Map Selection

- Team who wins coin toss is **Team A**, the other is **Team B**.
- Team A Bans a map.  
- Team B Bans a map.  
- Team A picks map 1.  
- Team B picks side for map 1.  
- Team B picks map 2.  
- Team A picks side for map 2.  
- Team A Bans a map.  
- Team B Bans a map.  
- Team A picks side for map 3.

> Organizers reserve the right to restart the veto process for any reason.

---

### Match Rules

- Teams are responsible for their own technical issues (hardware/internet).  
- Match will only be rehosted if **50% of the lobby faces an issue**.  
- Using hacks or any 3rd party software/tool will result in **immediate disqualification**.  
- All players must be in the lobby before the 5-minute time limit expires.  
  Teams with missing players will be disqualified.  
- Misuse of global chat will lead to a warning followed by disqualification.

---

### Minimum Users / No Show / Forfeit

- Tournament Teams must have a **minimum of four eligible users** in the lobby at the designated time.  
- If not, the team will forfeit the match.

---

### Reschedules

- Rescheduling of any match is **not allowed**.

---

### Rule Change

- The admin team reserves the right to amend, remove, or change the rules outlined in this rulebook without further notice.  
- Admins can make judgments on cases not explicitly detailed or even go against the rulebook in extreme cases to preserve fair play.

---

### Certificate Policy

- Certificate of participation will be given to all participants.

> *Violation of any of the above rules will lead to disqualification.*
`}
            link="#"
            image="/posters/3.jpg"
          />
          <Card
            name="Tekken"
            description={`### About

The Tekken LAN Event 2024 is a live, in-person tournament aimed at showcasing top-tier talent in Tekken.

---

### Team

Only **1 participant** per entry.

---

### Match Format

- The tournament will utilize a **double-elimination format**.  
- All matches except for the finals will be **best-of-three games**.  
- The finals will be **best-of-five games**.

---

### Rules and Regulations

- If players choose not to rematch on the same stage, the next stage must be selected **randomly**.  
- Certain stages may be **banned** due to fairness issues.  
- The winner of a game must keep their character, while the loser can switch.  
- All characters, including DLC, are allowed unless specifically banned.  
- All disputes should be raised with the tournament staff. The decision of the staff is **final**.  
- Finals will be conducted in a **best-of-five format**.  
- The grand final will **reset if the player from the loser's bracket wins the first set**.  
- **Spamming power moves is prohibited**.  
- Character customization will be **off**.

> *Violation of any of the above rules will lead to disqualification.*
`}
            link="#"
            image="/posters/5.jpg"
          />
          <Card
            name="Free Fire"
            description={`# Free Fire Max Tournament Rules and Details

## About the Event
Welcome to the Free Fire Max Tournament, an action-packed competition bringing together the best Free Fire players from around the world!  
This event promises an unforgettable experience, filled with thrilling gameplay, intense battles, and massive rewards.

---

## Team Specification
- Each team may consist of **4+1 participants** (4 players + 1 substitute).  
- Students from different educational institutions are allowed to form teams.

---

## Rules and Regulations

### 1. Device Policy
- Emulators and iPads are **prohibited**; only mobile phones are allowed.

### 2. Disconnection Protocol
- If a player disconnects, the squad may continue at a disadvantage.  
- If **50% of the lobby is disconnected**, a rematch might be considered.

### 3. Technical Issues
- Hardware and internet issues are the responsibility of the participating squad.

### 4. Fair Play
- Using hacks or unauthorized third-party tools/software leads to **immediate disqualification**.  
- The decision of the organizers will be final.  
- In case of any suspected issue or cause for concern, the team may be put under observation, and the device may be taken for a thorough examination.

---

## Battle Royale Settings

### Map Pool
- **BO1**: Bermuda, Purgatory, Kalahari  
- **BO2**: Bermuda, Purgatory, Kalahari, Alpine, Nexterra, Solara  
> Note: Changes in the map pool will be decided by tournament officials.

### Room Mode
- Battle Royale

### Room Settings
- Game Mode: Classic  
- Team Size: Squad  
- Drop List: Esports Mode  
- Players: 40-48  
- Spectators: 16  

#### Game Settings
- HP: 200  
- Movement Speed: 100%  
- Environment: Day  
- Fall Damage: Yes  
- Airdrop: Yes  
- Vehicles: Yes  
- UAV: Yes  
- EP: 0  
- Jump Height: 100%  
- Limited Ammo: Yes  
- Loadout: Yes  
- Character Skill: Yes  
- Gun Property: No  
- Airstrike: No  

#### Observer Settings
- Death Spectate: Yes  
- Save Replays: Yes  
- Hide Nickname: Yes  
- Block Emulator: Yes  
- Switch Position: No  

---

## Point System

### Kill Points
- **1 point per kill**

### Placement Points
| Position | Points |
|----------|--------|
| 1st      | 12     |
| 2nd      | 9      |
| 3rd      | 8      |
| 4th      | 7      |
| 5th      | 6      |
| 6th      | 5      |
| 7th      | 4      |
| 8th      | 3      |
| 9th      | 2      |
| 10th     | 1      |
| 11th–12th| 0      |

---

## Fixtures

- Number of Rounds: Determined by the total number of entries, with a **maximum of 12 teams per round**.

### Match Structure
- Qualifiers: Open to all teams (**BO1**)  
- Semi-Final: Top 36 teams (**BO1**)  
- Final: Top 12 teams (**BO2**)  
> Note: Any changes in match structure will be decided by the tournament officials.

---

## Judging Criteria
- The winner will be determined in the final round by summing up all points earned.  
- The squad with the **highest total points wins**.  
- Each kill earns **1 point**.

---

## Rule Changes
The organizers reserve the right to modify or introduce additional rules as necessary during the tournament.

> *Violation of any of the above rules will lead to disqualification.*
`}
            link="#"
            image="/posters/freefire.png"
          /> 
          <Card
            name="FIFA"
            description={'Coming soon...'}
            link="#"
            image="/posters/8.jpg"
            />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
