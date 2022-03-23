using CodingTask.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<Counters>();
builder.Services.AddSingleton<Database>();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();