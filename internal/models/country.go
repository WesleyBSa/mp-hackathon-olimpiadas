package models

type Country struct {
	ID           string `json:"id"`
	Name         string `json:"name"`
	FlagURL      string `json:"flag_url"`
	GoldMedals   int    `json:"gold_medals"`
	SilverMedals int    `json:"silver_medals"`
	BronzeMedals int    `json:"bronze_medals"`
	TotalMedals  int    `json:"total_medals"`
	Rank         int    `json:"rank"`
}
