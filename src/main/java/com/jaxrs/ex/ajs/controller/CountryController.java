/**
 * 
 */
package com.jaxrs.ex.ajs.controller;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.jaxrs.ex.ajs.model.Country;
import com.jaxrs.ex.ajs.service.CountriesService;

/**
 * @author vsuramsetti
 *
 */
@Path("/countries")
public class CountryController {

	private CountriesService service = new CountriesService();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getCountries() {
		List<Country> listOfCountries = service.getAllCountries();
		return Response.status(Status.OK).entity(listOfCountries).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{countryId}")
	public Response getCountryById(@PathParam("countryId") Integer countryId) {
		Country country = service.getCountry(countryId);
		return Response.status(Status.OK).entity(country).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addCountry(Country country) {
		Country country2 = service.addCountry(country);
		return Response.status(Status.OK).entity(country2).build();
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateCountry(Country country) {
		Country country2 = service.updateCountry(country);
		return Response.status(Status.OK).entity(country2).build();

	}

	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public void deleteCountry(@PathParam("id") int id) {
		service.deleteCountry(id);
		//return Response.status(Status.OK).entity("Deleted").build();

	}

}