CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"path" VARCHAR(512) NOT NULL,
	"description" VARCHAR(250) NOT NULL,
	"likes" INT DEFAULT 0
);

INSERT INTO gallery (path, description)
VALUES
  ('images/bernbaums.jpg', 'Bernbaum`s is my happy place.'),
  ('images/coffee.jpg', 'Slow mornings with coffee and incense are essential.'),
  ('images/dad.jpg', 'Records and beers with the old man.'),
  ('images/hammock.jpg', 'Perfect Sunday: biking to a park, setting up the hammock, and reading Dragon Ball in between birdwatching sessions.'),
  ('images/live-music.jpg', 'I love live music enough that I drove to Chicago last October to see the Algernon Cadwallader reunion tour.'),
  ('images/momma.jpg', 'I love my Momma. We know how to party.'),
  ('images/records.jpg', 'I spend a lot of money on records, but its worth every penny to hear "God of Wine" at full blast with the window open.'),
  ('images/SQUAD.jpg', 'SQUAD'),
  ('images/Harold.jpg', 'Harold`s on Main is the best bar in town and all the best people hang out there.');