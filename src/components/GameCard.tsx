import { Card, CardBody } from "@chakra-ui/card";
import { HStack, Heading, Image } from "@chakra-ui/react";
import undifinedImg from "../assets/empty-set-null-slashed-zero-260nw-2302464065.webp";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      {game.background_image ? (
        <Image src={game.background_image} />
      ) : (
        <Image src={undifinedImg} />
      )}
      <CardBody>
        <HStack justify="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
