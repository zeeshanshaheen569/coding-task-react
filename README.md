## Coding Task (React)

This coding task is for a Frontend developer and assumes that you are familiar with React and REST.

Your task is to build a simple UI which consumes the provided API and demonstrates the below functionality.

There is no absolute time limit and we won't judge you on how long it took you to complete, however we would suggest you spend no more than 2 hours on this task. We wouldn't ask you to do this task if we didn't already think you looked like a great candidate, so we really appreciate the time you put into this.

### General Instructions

- Use version control
- Please use **React** (v16.8+, i.e. hooks) for this project
- Feel free to use any other libraries you feel are appropriate, including component libraries, but be prepared to justify their usage.
- You are not required to use a state management library
- Use any toolchain you wish, but make sure you provide a **README** so we know how to run your app.

### The Task

Please build a simple UI which allows the user to view Donation Items and create new Donation Items.

A Donation Item is an item which can be donated towards by a donor.

Using React, please build a simple UI (single page) which integrates with the API provided. The user should be able to:

- View a list of the current donation items. Please show:
  - Donation Item Name
  - Reference (e.g. DI1001)
  - Price
  - Status
  - Location
  - Theme
- Filter the donation items by their Status
- Add a new Donation Item

To create a Donation Item, pass the following properties:

| Property | Description                                                   | Validation                                                                                   | Required on Create Request |
| -------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| Name     | A descriptive name of the donation item                       | - Length between 1-50 <br> - Must be unique                                                  | Yes                        |
| Location | The id of the location where this donation will be spent      | - Must be valid location                                                                     | Yes                        |
| Theme    | The id of the theme towards which this donation will be spent | - Must be valid theme                                                                        | Yes                        |
| Price    | The suggested amount in GBP (£) for this donation item        | - Must be a number/decimal if provided <br> - Currency must be GBP <br> - Amount must be > 0 | No                         |

### The API

All endpoints accessible at:

https://n3o-react-tech-test-api.azurewebsites.net/api/v1

You may interact with the below endpoints:

GET [/donationItems](https://n3o-react-tech-test-api.azurewebsites.net/api/v1/donationItems)

```json
Response Body e.g.:
{
  "items": [
    {
      "id": "9715c48a-3c4c-455e-85c0-ea85efa6af23",
      "reference": {
        "type": "DI",
        "number": 1001,
        "text": "DI1001"
      },
      "name": "Street Children Fund",
      "status": "inactive",
      "location": "india",
      "theme": "shelter",
      "price": {
        "amount": 100,
        "currency": "GBP",
        "text": "£100.00"
      }
    },
    ...
  ]
}

```

POST /donationItems

```json
Request Body e.g.:

{
  "name": "COVID-19 Appeal",
  "location": "unrestricted",
  "theme": "health",
  "price": {
    "amount": 10,
    "currency": "GBP"
  }
}
```

GET [/statuses](https://n3o-react-tech-test-api.azurewebsites.net/api/v1/statuses)

```json
Response body:

{
    "items": [
      {
        "id": "active",
        "name": "Active"
      },
      {
        "id": "inactive",
        "name": "inctive"
      }
    ]
  }
```

GET [/locations](https://n3o-react-tech-test-api.azurewebsites.net/api/v1/locations)

```json
Response Body e.g.:
{
  "items": [
    {
      "id": "sudan",
      "name": "Sudan"
    },
     {
      "id": "canada",
      "name": "Canada"
    },
     {
      "id": "yemen",
      "name": "Yemen"
    },
    {
      "id": "unrestricted",
      "name": "Where most needed"
    }
  ]
}
```

GET [/themes](https://n3o-react-tech-test-api.azurewebsites.net/api/v1/themes)

```json
Response Body e.g.:
{
  "items": [
    {
      "id": "health",
      "name": "Healthcare"
    },
     {
      "id": "food",
      "name": "Food"
    },
     {
      "id": "emergency",
      "name": "Emergency"
    },
    {
      "id": "unrestricted",
      "name": "General"
    }
  ]
}
```

POST /reset

Will reset the database

### Submitting

Please share your solution as a private repo on your presonal Github account. Add user n3o-github as a collaborator so we can take a look.

We look forward to seeing your work!

If you have any questions please feel free to get in touch with [harriet.ryder@n3o.ltd](mailto:harriet.ryder@n3o.ltd)
