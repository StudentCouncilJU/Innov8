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
            description={`# BGMI

## About The Event:
Survive the chaos, eliminate opponents, and be the last one standing to claim the coveted title of
the ultimate BGMI champion. "Battle Royale- BGMI" challenges players to navigate a shrinking play
zone, scavenge for weapons, and strategize their way to victory

## Team Specification
A team may consist of a maximum of 4+1 participants. Students from different educational
institutes can form a team. 

## Rules And Regulations 
- Emulators are prohibited, only mobile phones and iPads are allowed for participation.  
- If a player is disconnected from a match, the Squad has the option to continue playing at a
disadvantage.  
- Technical problems, including hardware and internet issues, are the responsibility of the
participating squads  

## FIXTURES
The event will consist of brackets depending upon the number of entries i.e. 16 at most for a
single bracket per round.  
- **Qualifiers:** 2 Matches (1 Erangel, 1 Miramar)  
- **Semi-Final:** (32 Teams) 3 Matches ( 2 Erangel, 1 Miramar )  
- **Final:** (16 Teams) 4 Matches (2 Erangel, 1 Miramar, 1 Sanhok )  

## JUDGING CRITERIA 
The winner of the tournament will be decided as follows:-  
- The winner will be decided in the final round by adding up all the points they scored in the
final round.  
- The Solo Squad with highest point count will proceed to next round or
eventually win.  

**Note:** The organizers reserve the right to modify or introduce additional rules as necessary during the tournament  

## PLACEMENT POINTS 
- 1st Position - 10 points  
- 2nd Position - 6 points  
- 3rd Position - 5 points  
- 4th Position – 4 points  
- 5th Position - 3 points  
- 6th Position - 2 points  
- 7th Position - 1 points  
- 8th Position – 1 point  
- 9th Position -16th Position - 0 points  

**1 Point per Kill**
`}
            link="#"
            image="/posters/2.jpg"
          />
          <Card
            name="Valorant"
            description={`# VALORANT

## About The Event
The Valorant LAN Event 2025 will be held in-person, bringing together top teams to compete in a
structured, competitive environment. 

## Team Specification 
The Players are free to create their teams with a minimum of 5 players and 1 substitute. Each such team
registered by the Players will constitute a Team. (Match fixtures/brackets and schedule will be shared
with the registered Team Leaders) 

PC’s will be provided to the players.  
ONLINE QUALIFIERS WILL BE HELD ONLINE AND 8 TEAMS WILL BE SELECTED FOR THE
LAN EVENT 

## Tournament Format :- 
- **Online Qualifiers:** Single Elimination - BO1 (Best of one ) Match - Mode :- STANDARD  
  (Online Qualifiers will take place 1 week before the event start date.)  
- **Quarter Finals:** Single Elimination - BO1 (Best of one ) Match - Mode :- STANDARD  
  [Top 8 teams will advance to the Quarter Finals in the offline tournament at JECRC University Campus]  
- **Semi Finals:** BO1 ( best of one ) Match - Mode:- STANDARD  
- **Finals:** BO3 ( best of three ) Match - Mode:- STANDARD  
  (Note: Quarter Finals , Semi Finals and Finals will be held offline at JECRC University Campus )  

## Match Procedure :
### Valorant Map Pool :
The map pool will be limited to the following maps:  
- Ascent  
- Bind  
- Corrode  
- Haven  
- Lotus  
- Abyss  
- Sunset  

### Server Setup :  
Game Server : Mumbai  

### Best of 1 Map Selection  
(Team who wins coin toss is team A other is team B)  
- Team A Bans a map from the map pool.  
- Team B Bans a map from the map pool.  
- Team A Bans a map from the map pool.  
- Team B Bans a map from the map pool.  
- Team A Bans a map from the map pool.  
- Team B Bans a map from the map pool.  
- The Last Map is picked.  
- Team A picks the side.  

### Best of 3 Map selection
(Team who wins coin toss is team A other is team B)  
- Team A Bans a map from the map pool.  
- Team B Bans a map from the map pool.  
- Team A picks map 1  
- Team B picks side for map 1  
- Team B picks map 2  
- Team A picks side for map 2  
- Team A Bans a map from the map pool.  
- Team B Bans a map from the map pool.  
- Team A picks side for map 3  

*Organizers reserve the right to restart the veto process for whatever reason they deem necessary.*  

## Match Rules 
- Teams are responsible for their own technical issues ( Hardware / Internet)  
- Match will only be rehosted if 50% of the lobby faces an issue.  
- Using hacks or any 3rd party software /tool will result in immediate disqualification.  
- All the Players have to be in the lobby before the time limit goes down (5 minutes). If there are
Players from any of the Teams who are missing after this time limit, the team whose players who
have failed to join will be disqualified.  
- Misuse of global chat will lead to warning followed by disqualification.  

### Minimum users / No Show / Forfeit 
- Tournament Teams must have a minimum of four eligible users in the lobby at the designated
time of your match. If not, then the Team who does not have 4 or more Players will forfeit the
matches.  

### Reschedules 
- Rescheduling of any match is not allowed in this tournament.  

### Rule Change 
- The admin team reserves the right to amend, remove, or otherwise change the rules outlined in
this Rulebook, without further notice. The admin team also reserves the right to make a judgment
on cases that are not explicitly supported, or detailed in this Rulebook, or to make judgments that
even go against this Rulebook in extreme cases, to preserve fair play and sportsmanship.  

### Certificate Policy 
- Certificate of participation will be given to all the participants.
`}
            link="#"
            image="/posters/3.jpg"
          />
          <Card
            name="Tekken"
            description={`# TEKKEN

## About The Event 
The Tekken LAN Event 2025 is a live, in-person tournament aimed at showcasing top-tier talent in
Tekken

## Team Specification
Only 1 participant 

## MATCH FORMAT 
The tournament will utilize a double-elimination format.  
All matches except for the finals will be best-of-one games.  
The finals will be best-of-three games.  

## RULES AND REGULATIONS 
- If players choose not to rematch on the same stage, the next stage must be selected randomly.  
- Certain stages may be banned due to fairness issues.  
- The winner of a game must keep their character, while the loser can switch.  
- All characters, including DLC, are allowed unless specifically banned.  

All disputes should be raised with the tournament staff. The decision of the staff is final.  
The grand final will reset if the player from the loser's bracket wins the first set.  
Spamming power moves are probihited.  
Character customization will be off.  

**VIOLATION OF ANY OF THE ABOVE RULES WILL LEAD TO DISQUALIFICATION.**
`}
            link="#"
            image="/posters/5.jpg"
          />
          <Card
            name="Free Fire"
            description={`# FREE FIRE MAX

## About The Event
Welcome to the Free Fire Max Tournament, an action-packed competition bringing together the best
Free Fire players from around the world! This event promises an unforgettable experience, filled with
thrilling gameplay, intense battles, and massive rewards. 

## Team Specification 
Each team may consist of 4+1 participants (4 players + 1 substitute).  
Students from different educational institutions are allowed to form teams.

## Rules and Regulations
1. **Device Policy:**  
   Emulators and iPads are prohibited; only mobile phones are allowed.  

2. **Disconnection Protocol:**  
   If a player disconnects, the squad may continue at a disadvantage.  
   If 50% of the lobby is disconnected then rematch, might be considered.  

3. **Technical Issues:**  
   Hardware and internet issues are the responsibility of the participating squad.  

4. **Fair Play:**  
   Using hacks or unauthorized third-party tools/software leads to immediate disqualification.  
   The decision of the organizers will be final.  
   In case of any suspected issue or cause for concern, the team may be put under observation
   and the device may be taken for a thorough examination.  

### Battle Royale Settings:
- **Qualifiers:** Any Map  
- **Semi Finals:** Bermuda, Purgatory, Kalahari  
- **Grand Finals:** Bermuda, Purgatory, Kalahari, Alpine, Nexterra, Solara  

*Note: Any changes in the map pool will be decided by the tournament officials*  

Room Mode: Battle Royale  

### Room Settings: 
- Game Mode: Classic  
- Team Size: Squad  
- Drop List: Esports Mode  
- Players: 40-48  
- Spectators: 16  

### Game Settings: 
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

### Observer Settings: 
- Death Spectate: Yes  
- Save Replays: Yes  
- Hide Nickname: Yes  
- Block Emulator: Yes  
- Switch Position: No  

## Placement Points 
- 1st – 12  
- 2nd – 9  
- 3rd – 8  
- 4th – 7  
- 5th – 6  
- 6th – 5  
- 7th – 4  
- 8th – 3  
- 9th – 2  
- 10th – 1  
- 11th – 0  
- 12th – 0  

**Kill Points:** 1 point is awarded per kill.  

## Fixtures 
- **Number of Rounds:** Determined by the total number of entries, with a maximum of 12 teams per
round.  
- **Match Structure:**  
  - Qualifiers: Open to all teams  
  - Semi-Final: Top 24 teams (3 Matches)  
  - Final: Top 12 teams (6 Matches).  

*Note: Any changes in the match structure will be decided by the tournament officials.*  

## Judging Criteria
The winner will be determined in the final round by summing up all points earned.  
The squad with the highest total points wins.  
Each kill earns 1 point.  

## Rule Changes 
The organizers reserve the right to modify or introduce additional rules as necessary during the
tournament.
`}
            link="#"
            image="/posters/freefire.png"
          /> 
          <Card
            name="FIFA"
            description={`# FIFA

## About The Event
The Innov8 FIFA 25 LAN Event is a live, in-person tournament at JECRC University, aimed at showcasing
top-tier FIFA talent among students.

## Team Specification
Individual participation only (1 player per entry).  
PS5 consoles and controllers will be provided by Innov8.

## Match Format
- Mode: 1v1 (Club Mode)  
- Seeding: Random  
- Match Duration: 6 minutes (3 mins per half) | Further will be increased to 8 minutes (4 mins per half)  
- Game Speed: Normal  
- Controls: Any  
- Tiebreaker: Penalties  

## Tournament Stages
- **Qualifiers** – Single Elimination  
- **Semifinals & Finals** – Single Elimination  

## Rules and Regulations
- **No Show** – Players must report within 10 minutes of scheduled match time. Failure = default
loss.  
- **Results** – Recorded and confirmed by admins.  
- **Disputes** – Must be reported immediately with proof (screenshots, photos, or video evidence).  
  The organisers’ decision is final.  

- **Conduct** – Abusive language, harassment, unsportsmanlike behaviour, or exploitation of in-
game mechanics (e.g., unfair pausing) is prohibited.  

- **Collusion** – Strictly banned. Examples:  
  - Intentionally losing a match  
  - Playing for another participant  
  - Match-fixing  
  - Prize-splitting agreements  
  ➝ Penalty: Immediate disqualification + loss of prizes  

- **Penalties** – Warnings, match forfeits, disqualification, prize revocation, or public
announcement of penalties.  

- **Rule Change** – Organisers reserve the right to modify or add rules at any time, based on
circumstances.
`}
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
