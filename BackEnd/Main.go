package main

import (
	DB "backend/database"
	route "backend/routes"
	"log"
	"net/http"
)

func main() {
	//initiating connection to database
	DB.InitDB()

	//initiating all routes to be used in client side
	route.InitEventRoute()
	route.InitSessionRoutes()
	route.InitAttendingEventRoutes()
	route.InitEventImageRoutes()

	//adding port + handling routes with Mux handler
	log.Fatal(http.ListenAndServe(":3001", route.Mux))
}
