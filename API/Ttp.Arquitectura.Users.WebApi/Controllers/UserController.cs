using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;
using Ttp.Arquitectura.Users.Application.Commands;
using Ttp.Arquitectura.Users.Application.Queries;
using Ttp.Arquitectura.Users.WebApi.Models.Request;
using Ttp.Arquitectura.Users.WebApi.Models.Response;

namespace Ttp.Arquitectura.Users.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(AddUserHandler addUserHandler, GetUsersHandler getUsersHandler, GetUserIdHandler getUserIdHandler, EditUserHandler editUserHandler, DeleteUserHandler deletetUserHandler, GetCiudadesHandler getCiudadesHandler, EditUserCiudadesHandler editUserCiudadesHandler, AddUserCiudadesHandler addUserCiudadesHandler) : ControllerBase
    {

        private readonly AddUserHandler _addUserHandler = addUserHandler;
        private readonly EditUserHandler _editUserHandler = editUserHandler;
        private readonly GetUsersHandler _getUsersHandler = getUsersHandler;
        private readonly GetUserIdHandler _getUserIdHandler = getUserIdHandler;
        private readonly DeleteUserHandler _deleteUserHandler = deletetUserHandler;
        
        private readonly GetCiudadesHandler _getCiudadesHandler = getCiudadesHandler;
        private readonly EditUserCiudadesHandler _editUserCiudadesHandler = editUserCiudadesHandler;
        private readonly AddUserCiudadesHandler _addUserCiudadesHandler = addUserCiudadesHandler;


        [HttpGet]
        [Route("GetUserAll")]
        public IActionResult GetUserAll()
        {
            return Ok(_getUsersHandler.Handle().Adapt<List<GetUserResponse>>());
        }

        [HttpGet]
        [Route("GetUserId")]
        public IActionResult GetUserId(string id)
        {
            return Ok(_getUserIdHandler.Handle(Guid.Parse(id)).Adapt<GetUserResponse>());
        }

        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser([FromBody] AddUserRequest request)
        {
            _addUserHandler.Handle(request.Adapt<AddUserCommand>());
            return Ok();
        }

        [HttpPost]
        [Route("editUser")]
        public IActionResult EditUser([FromBody] EditUserRequest request)
        {
            _editUserHandler.Handle(request.Adapt<EditUserCommand>());
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteUser")]
        public IActionResult DeleteUser([FromBody] EditUserRequest request)
        {
            _deleteUserHandler.Handle(request.Adapt<DeleteUserCommand>());
            return Ok();
        }

        // Ciudades usuario

        [HttpGet]
        [Route("getUserCiudadesAll")]
        public IActionResult GetUserCiudadesAll(string Id)
        {            
            return Ok(_getCiudadesHandler.Handle(Id).Adapt<List<GetUserCiudadesResponse>>());
        }

        [HttpPost]
        [Route("addUserCiudades")]
        public IActionResult AddUserCiudades([FromBody] AddUserCiudadesRequest request)
        {
            _addUserCiudadesHandler.Handle(request.Adapt<AddUserCiudadesCommand>());
            return Ok();
        }

        [HttpPost]
        [Route("editUserCiudades")]
        public IActionResult EditUserCiudades([FromBody] EditUserCiudadesRequest request)
        {
            _editUserCiudadesHandler.Handle(request.Adapt<EditUserCiudadesCommand>());
            return Ok();
        }


    }
}
