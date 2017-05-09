Frog Lightning Talk Manager
===

The following items can be saved.

| Key           | Value       |
|:-------------:|-------------|
| `title`         | the presentation's title|
| `description`   | description of the presentation|
| `speaker`       | speaker's name|
| `topic`         | this is like tag|
| `related_url`   | put repository url or some like that|
| `status`        | choose from ['scheduled', 'completed', 'canceled']|
| `scheduled_date`| date of the presentation|

likes:
```js
var postData = {
  title: "presentation title", //required
  description: "description of the presentation",
  speaker: "speaker name", //required
  topic: ["tag1", "tag2"],
  related_url: "https://github.com/changami/froghouse-lightning-talk-manager-server",
  status: "scheduled",
  scheduled_date: "2017/05/14"
}
```

How to run
---
* standalone API server  
```
npm start
```
* with docker-compose environment:  
```
docker-compose up -d
```

Then, you can access it with `http://localhost:3000`.  
And docker-compose environment also has Database GUI application([mongo-express](https://github.com/mongo-express/mongo-express)) on `http://localhost:8081`.

How to test
---
* with local MongoDB:  
```
npm run test
```
* with docker-compose environment:  
```
docker-compose run --rm web npm run test
```
