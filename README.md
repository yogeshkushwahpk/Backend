# Backend Course

## Course structure

| Module | Focus | Lessons | Teaching status |
| --- | --- | ---: | --- |
| `01.node_fundamentals` | Node.js, modules, async code, events, native HTTP, files, configuration, and debugging | 8 | Required prerequisite |
| `02.http_and_express` | Express, middleware, forms, EJS, static files, and projects | 14 | Required core; CORS internals are optional |
| `03.database_and_mongodb` | MongoDB, Mongoose, data modelling, queries, validation, relationships, indexes, aggregation, transactions, and MVC | 7 | Required core |
| `04.advanced_api_engineering` | Route/query parameters, pagination, sorting, and search | 5 | Route parameters required; lessons 02–05 optional |
| `05.production_api_features` | Error handling, validation, rate limiting, security, logging, and file uploads | 6 | Optional enrichment |
| `06.authentication_and_authorization` | Password-based authentication and JWT authentication | 2 | Required core |
| `07.backend_architecture` | Monoliths, scaling, microservices, distributed systems, Docker, and Kubernetes | 16 | Optional enrichment |
| `08.assignments` | Required projects plus extra API practice | 9 | Sessions 24, 28, 35, and 37 required; remaining assignments optional |

## Legacy-content alignment

The material in `Old_backend` is preserved only as an archive. Basic Node.js and native HTTP are together in module 01. Express begins in module 02 only after learners have made a native HTTP server; its harder REST, middleware, and CORS material follows the first Express CRUD API. Students should follow the numbered modules, not the archive.

| Legacy material | New course location |
| --- | --- |
| `01.node.js` — Node, modules, files, events, and HTTP | `01.node_fundamentals` |
| `01.node.js` — Express, REST, CRUD, and CORS | `02.http_and_express` |
| `02.node_api_concepts` — MVC | `03.database_and_mongodb` |
| `02.node_api_concepts` — routing, queries, pagination, sorting, and search | `04.advanced_api_engineering` |
| `02.node_api_concepts` — errors, validation, rate limiting, security, logging, and uploads | `05.production_api_features` |
| `02.node_api_concepts` — authentication and JWT | `06.authentication_and_authorization` |
| `00.assignments` and legacy API assignments | `08.assignments` |

## Required academic core

Teach the [Academic Core](ACADEMIC_CORE.md) as the required path. It maps every academic session to one lesson or project, including forms, EJS, static files, the Admin Dashboard, and the final full-stack CRUD project.

Complete `01.node_fundamentals` before starting Express. It is the required Node.js foundation for this course.

## Optional enrichment

These materials remain in the repository but are not required for the academic core:

- CORS protocol deep-dive: `02.http_and_express/06.cors_under_the_hood.md`
- Advanced query APIs: `04.advanced_api_engineering/02` through `05`
- Production API features: `05.production_api_features`
- Backend architecture: `07.backend_architecture`
- Extra practice assignments: `08.assignments/01` through `04`, `06`, and `07`
