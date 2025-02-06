# adoPet API Project

This project is an API for pet adoption built with TypeScript. It features a well-structured folder architecture and uses SQLite with TypeORM for database management.

## Project Overview
- API to manage adopters and pets.
- Organized folder structure inside a `src` directory, containing:
  - **config:** Database configurations.
  - **controllers:** Handle API request logic.
  - **entities:** Define database table structures using TypeScript and TypeORM (e.g., `PetEntity.ts`, `AdopterEntity.ts`, `AddressEntity.ts`).
  - **enum:** Define enumerations for animal species.
  - **repositories:** Handle data operations.
  - **routes:** Define API routes.
  - **types:** Centralize standardized object types.

## Core Features
- CRUD operations for adopters and pets.
- Adoption feature via the endpoint:
  ```bash
  PUT /pets/:petId/adoPet/:adopterId
  ```
  - Relates a pet with an adopter.
  - Updates the pet's status to "adopted."

## Technologies Used
- **TypeScript:** Strongly typed language for scalable JavaScript development.
- **SQLite:** Lightweight relational database.
- **TypeORM:** Object-Relational Mapping tool for database operations.

## Database Entities
- **PetEntity:** Defines pet attributes.
- **AdopterEntity:** Defines adopter attributes.
- **AddressEntity:** Manages adopter address details.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/Lucas-I-Marciano/adoPet
   ```
2. Navigate to the project folder:
   ```bash
   cd adoPet
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database configuration in the `config` directory.
5. Start the server:
   ```bash
   npm run start
   ```
6. Access the API at `http://localhost:3000`.

## API Routes
### Adopters
- `GET /adopters`: Retrieve all adopters.
- `GET /adopters/:id`: Retrieve a specific adopter.
- `POST /adopters`: Create a new adopter.
- `PUT /adopters/:id`: Update an adopter's details.
- `DELETE /adopters/:id`: Delete an adopter.

### Pets
- `GET /pets`: Retrieve all pets.
- `GET /pets/:id`: Retrieve a specific pet.
- `POST /pets`: Add a new pet.
- `PUT /pets/:id`: Update pet details.
- `DELETE /pets/:id`: Delete a pet.
- `PUT /pets/:petId/adoPet/:adopterId`: Relate a pet with an adopter and update its status to "adopted."

## Author
[Lucas I. Marciano](https://github.com/Lucas-I-Marciano)

## License
This project is for educational purposes only and does not include a specific license.

