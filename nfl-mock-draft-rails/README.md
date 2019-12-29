# NFL Mock Draft Rails API Server

## Local development

### Ruby environment

Standard `.ruby-version` and `.ruby-gemset` files are present in the Rails project root directory. 
Tools like RVM and rbenv should have no issues using these files to build the appropriate Ruby environment.


## Noteworthy rake tasks

### Recreate database through migrations and data seeding

```bash
bundle exec rake db:drop db:create db:migrate db:seed
```

### Dump the PostgreSQL database structure

Due to the use of PostgreSQL enums, the `db/schema.rb` representation cannot be used for recreating the database. A `pg_dump` version can be created:
```bash
bundle exec rake db:structure:dump
```

---

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
